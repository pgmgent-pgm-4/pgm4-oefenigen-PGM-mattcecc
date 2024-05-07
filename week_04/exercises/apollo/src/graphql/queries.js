import { gql } from "@apollo/client";

export const GET_ALL_TODOS = gql`
  query Todos {
    todos {
      checklist
      id
      inhoudTekst
      title
    }
  }
`;
