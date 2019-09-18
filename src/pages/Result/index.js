import React, { useState, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  CircularProgress
} from "@material-ui/core";

import Header from "../../components/Header";
import api from "../../services/api";

import { Container } from "./styles";

export default function Result({ match }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await api.get(
        `/strains/search/name/${match.params.name}`
      );

      setResults(response.data);
      setLoading(false);
    }

    fetch();
  }, [match.params.name, results]);

  return (
    <>
      <Header />
      <Container>
        {!loading ? (
          <>
            <h1>
              Found {results.length} results for "{match.params.name}"
            </h1>
            {results.map(result => (
              <ExpansionPanel key={String(result.id)}>
                <ExpansionPanelSummary
                  expandIcon={<MdExpandMore color="#66aa66" />}
                >
                  <h3>
                    <span>
                      <b>Nome:</b> {result.name}
                    </span>
                    <span>
                      <b>Raça:</b> {result.race}
                    </span>
                  </h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {result.desc === null ? (
                    <p
                      style={{
                        width: "100%",
                        textAlign: "center"
                      }}
                    >
                      No Description
                    </p>
                  ) : (
                    <p>{result.desc}</p>
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </>
        ) : (
          <CircularProgress
            style={{
              border: "none",
              color: "#55aa55"
            }}
            className="loading"
          />
        )}
      </Container>
    </>
  );
}
