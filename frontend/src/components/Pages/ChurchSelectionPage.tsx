import React, { FC, useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface Church {
  id: number;
  acronym: string;
  name: string;
}

const ChurchSelectionPage: FC<RouteComponentProps> = ({ history }) => {
  const [selectedChurchField, setSelectedChurchField] = useState<string>('');
  const [churches, setChurches] = useState<Church[]>([]);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  useEffect(() => {
    const doGetChurches = async () => {
      const endpoint = process.env.REACT_APP_API + 'Church';

      let response = await fetch(endpoint);

      if (response && response.status === 200) {
        let data: Church[] = await response.json();
        setChurches(data);
      }
    };
    doGetChurches();
  }, churches);
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
          {churches && (
            <Form.Control
              as="select"
              onChange={(event) =>
                setSelectedChurchField(event.currentTarget.value)
              }
              disabled={formErrors.length > 0}
            >
              <option value="">----</option>
              {churches.map((church) => (
                <option key={'church_' + church.acronym} value={church.acronym}>
                  {church.name}
                </option>
              ))}
            </Form.Control>
          )}
        </Modal.Body>
        <Modal.Footer>
          {formErrors.length > 0 ? (
            formErrors.map((error) => <Alert variant="danger">{error}</Alert>)
          ) : (
            <Button
              variant="primary"
              css={css`
                margin: auto;
              `}
              onClick={() => {
                if (selectedChurchField !== '')
                  history.push(selectedChurchField);
                else {
                  let tempList = formErrors;
                  tempList.push('Select a Church');
                  setFormErrors(tempList);
                }
              }}
              disabled={formErrors.length > 0}
            >
              Select
            </Button>
          )}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ChurchSelectionPage;
