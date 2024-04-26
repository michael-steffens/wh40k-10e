interface Catalogue {
  gameSystemId: string;
  id: string;
  name: string;
  revision: string;
  type: string;
  authorContact?: string;
  authorName?: string;
  authorUrl?: string;
  battleScribeVersion?: string;
  catalogueLinks?: CatalogueLinks[];
}

interface CatalogueLinks {
  id?: string;
  name?: string;
  targetID: string;

  importRootEntries?: boolean;
  targetId?: string;
  type?: string;
}
