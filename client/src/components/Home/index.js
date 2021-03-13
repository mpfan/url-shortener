import React, { useState } from "react";

import Page from "../Page";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { createShortUrl } from "../../data/mutations";

import styles from "./home.module.css";

const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [createShortUrlMutation, { data, error }] = useMutation(createShortUrl);

  return (
    <Page>
      <Alert
        className={styles.alert}
        show={error !== undefined}
        variant="danger"
      >
        {error ? error.message : ""}
      </Alert>
      <Form className="d-flex align-items-end justify-content-center">
        <Form.Group
          controlId="longUrl"
          className={`${styles.urlInput} mb-0 mr-2`}
        >
          <Form.Control
            type="text"
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter Url"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={async (e) => {
            e.preventDefault();

            try {
              await createShortUrlMutation({
                variables: { longUrl },
              });
            } catch (error) {}
          }}
        >
          Submit
        </Button>
      </Form>
      {data && (
        <div className={styles.content}>
          <Card>
            <Card.Title>Your Short Url:</Card.Title>
            <Card.Text>
              <a href={data.createUrl.shortUrl} target="_blank" rel="noopener noreferrer">{data.createUrl.shortUrl}</a>
            </Card.Text>
          </Card>
        </div>
      )}
    </Page>
  );
};

export default HomePage;
