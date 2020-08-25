import React, { FC, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ChurchSelectionPage: FC<RouteComponentProps> = ({ history }) => {
  const [managedChurches, setManagedChurches] = useState<string[]>([
    'Bethlehem Lutheran Church',
    'Christ Alone Lutheran Church',
  ]);
  const [selectedChurchField, setSelectedChurchField] = useState<string>('');

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80vh;
      `}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title
            css={css`
              margin: auto;
            `}
          >
            Select a Church
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            as="select"
            onChange={(event) =>
              setSelectedChurchField(event.currentTarget.value)
            }
          >
            <option key="" value="">
              Nothing Selected
            </option>
            {managedChurches &&
              managedChurches.map((church) => (
                <option key={church}>{church}</option>
              ))}
          </Form.Control>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            css={css`
              margin: auto;
            `}
            onClick={() => {
              history.push(selectedChurchField);
            }}
          >
            Select
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ChurchSelectionPage;
