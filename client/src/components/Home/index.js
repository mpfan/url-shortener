import React, { useState } from "react";

import Page from "../Page";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { createShortUrl } from "../../data/mutations";

import styles from "./home.module.css";

const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState(false);

  const [createShortUrlMutation, { data }] = useMutation(createShortUrl);

  return (
    <Page>
      <Alert show={error} variant="danger">
        Something went try please try again
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
              createShortUrlMutation({
                variables: { longUrl },
              });
            } catch (error) {
              setError(true);
            }
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
              <a href={data.createUrl.shortUrl}>{data.createUrl.shortUrl}</a>
            </Card.Text>
          </Card>
        </div>
      )}
    </Page>
  );
};

export default HomePage;
