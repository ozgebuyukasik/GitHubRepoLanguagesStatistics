/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentUserLanguages
// ====================================================

export interface getCurrentUserLanguages_viewer_repositories_nodes_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface getCurrentUserLanguages_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: getCurrentUserLanguages_viewer_repositories_nodes_primaryLanguage | null;
}

export interface getCurrentUserLanguages_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (getCurrentUserLanguages_viewer_repositories_nodes | null)[] | null;
}

export interface getCurrentUserLanguages_viewer {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: getCurrentUserLanguages_viewer_repositories;
}

export interface getCurrentUserLanguages {
  /**
   * The currently authenticated user.
   */
  viewer: getCurrentUserLanguages_viewer;
}
