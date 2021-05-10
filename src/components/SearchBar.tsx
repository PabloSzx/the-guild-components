import React, { useEffect, useState, useRef } from 'react';
import algoliaSearch from 'algoliasearch/lite';

import {
  InstantSearch,
  Highlight,
  connectHits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom';

import {
  Hit,
  SearchBoxProvided,
  StateResultsProvided,
} from 'react-instantsearch-core';

import { Modal } from './Modal';

import {
  SearchBarButton,
  SearchBarForm,
  SearchBarResults,
  SearchBarHit,
} from './SearchBar.styles';

import { ISearchBarProps } from '../helpers/types';
import { searchBarThemedIcons } from '../helpers/assets';
import { toggleLockBodyScroll } from '../helpers/modals';
import { ThemeContext } from '../helpers/theme';
import { algoliaConfig } from '../../configs.json';


export const SearchBar: React.FC<ISearchBarProps> = ({ accentColor, title, placeholder }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const icons = searchBarThemedIcons(isDarkTheme || false);

  const searchClient = algoliaSearch(algoliaConfig.appID, algoliaConfig.apiKey, {
    hosts: algoliaConfig.hosts
  });

  const handleModal = (state: boolean) => {
    toggleLockBodyScroll(state);
    setModalOpen(state);
  }

  useEffect(() => {
    if (modalOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [modalOpen]);

  const SearchBox: React.FC<SearchBoxProvided> = ({ currentRefinement, refine }) => (
    <SearchBarForm accentColor={accentColor} >
      <form noValidate action="" role="search">
        <img src={icons.search} height="30" width="30" alt="Search icon" />
        <input
          aria-autocomplete="both"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="search"
          spellCheck="false"
          placeholder={placeholder}
          maxLength={64}
          type="search"
          ref={searchRef}
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        ></input>
        {currentRefinement && (
          <button type="button" onClick={() => refine('')}>
            <img src={icons.close} height="34" width="34" alt="Clear icon" />
          </button>
        )}
      </form>
    </SearchBarForm>
  );

  const StateResults: React.FC<StateResultsProvided> = ({ searchState, searchResults, children }) => {
    let content;

    if (searchState && searchResults && !searchResults.nbHits) {
      content = <span>No results for <strong>&quot;{searchState.query}&quot;</strong>.</span>
    }

    return <SearchBarResults>{content || children}</SearchBarResults>;
  }

  const Hits: React.FC<{ hits: Hit<any>[] }> = ({ hits }) => {
    const transformItems = (items: Hit<any>[]) => {
      const groupBy = items.reduce((acc, item) => {
        const list = acc[item.hierarchy.lvl0] || [];

        return {
          ...acc,
          [item.hierarchy.lvl0]: list.concat(item),
        };
      }, {});

      return Object.keys(groupBy).map((level) => ({
        items: groupBy[level],
        level,
      }));
    };

    const transformIcon = (item: Hit) => {
      if (item.anchor) {
        return icons.hashtag;
      } else if (item.content) {
        return icons.content;
      } else {
        return icons.page;
      }
    }

    const groupedHits = transformItems(hits);

    return (
      <>{
        groupedHits.map(hit => (
          <SearchBarHit key={hit.level} accentColor={accentColor}>
            <h2>{hit.level}</h2>
            {hit.items.map((subHit: Hit) => (
              <a key={subHit.url} href={subHit.url} target="_blank" rel="noopener noreferrer">
                <img src={transformIcon(subHit)} height="26" width="26" alt="Result icon" />
                <div className="ais-content">
                  <Highlight attribute={`hierarchy.${subHit.type}`} hit={subHit} />
                  <p>{subHit.url}</p>
                </div>
              </a>
            ))}
          </SearchBarHit>
        ))
      }</>
    )
  };

  const CustomSearchBox = connectSearchBox(SearchBox);
  const CustomStateResults = connectStateResults(StateResults);
  const CustomHits = connectHits(Hits);

  return (
    <>
      <SearchBarButton accentColor={accentColor} onClick={() => handleModal(true)}>
        <img src={icons.search} height="18" width="18" alt="Search icon" />
        <span>{placeholder}</span>
      </SearchBarButton>
      <Modal title={title} visible={modalOpen} placement="top" onCancel={() => handleModal(false)}>
        <InstantSearch indexName={algoliaConfig.searchIndex} searchClient={searchClient}>
          <CustomSearchBox />
          <CustomStateResults>
            <CustomHits />
          </CustomStateResults>
        </InstantSearch>
      </Modal>
    </>
  );
};