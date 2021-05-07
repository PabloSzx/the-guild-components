import React, { useState } from 'react';

import { Modal } from './Modal';

import {
  Container,
  Placeholder,
  Title,
  Table,
  TableBody,
  TableHeading,
  TableItem,
  Wrapper
} from './MarketplaceList.styles';

import { IMarketplaceListProps } from '../helpers/types';
import { ThemeContext } from '../helpers/theme';
import { marketplaceThemedAssets } from '../helpers/assets';
import { toggleLockBodyScroll } from '../helpers/modals';

export const MarketplaceList: React.FC<IMarketplaceListProps> = ({ title, placeholder, items }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(items[0]);
  const marketplaceAssets = marketplaceThemedAssets(isDarkTheme || false);

  const formateDate = (value: string) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(value);
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
  }

  const formatStars = (value: number) => {
    const stars = (value / 1000).toFixed(2);
    return `${stars} k`;
  }

  const handleModal = (state: boolean) => {
    !modalOpen && toggleLockBodyScroll(state);
    setModalOpen(state);
  }

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {!items.length ? (
          <Placeholder>
            {placeholder}
          </Placeholder>
        ) : (
          <>
            <Table>
              <TableHeading>
                <tr>
                  <th>Name</th>
                  <th>Last Update</th>
                  <th>Star</th>
                  <th></th>
                </tr>
              </TableHeading>
              <TableBody>
                {items.map(item => (
                  <TableItem key={item.title}>
                    <td>
                      <div>
                        <img src={item.image.src} alt={item.image.alt} />
                        <span>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </span>
                      </div>
                    </td>
                    <td>{formateDate(item.update)}</td>
                    <td>{formatStars(item.stars)}</td>
                    <td>
                      <button type="button" onClick={() => {
                        handleModal(true);
                        setCurrentItem(item);
                      }}>
                        <img src={marketplaceAssets.caret} alt=">" />
                      </button>
                    </td>
                  </TableItem>
                ))}
              </TableBody>
            </Table>
            <Modal
              title={currentItem.title}
              placement="bottom"
              visible={modalOpen}
              onCancel={() => handleModal(false)}
            >
              {currentItem.modal}
            </Modal>
          </>
        )}
      </Container>
    </Wrapper >
  );
}