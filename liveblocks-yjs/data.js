// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'liveblocks-yjs',
  Name: 'Liveblocks Yjs',
  Website: 'https://liveblocks.io/sync-datastore/yjs',
  License: 'Proprietary',
  Deployment: ['Hosted'],
  MaturityLevel: 'Production-ready',
  InitialReleaseDate: new Date('2023-09-05'),
  AppTarget: {
    Platform: {
      data: ['Browser', 'Node']
    },
    LanguageSDK: {
      data: ['TypeScript']
    },
    FrameworkIntegrations: {
      data: ['React']
    }
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP']
    },
    Topology: {
      data: 'Client-Server'
    }
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['Cloudflare Durable Object Storage', 'IndexedDB']
    },
    DataModelParadigm: {
      data: 'Document',
      comment: 'Each room is a digital space where people colalborate, and it corresponds with a document.'
    },
    SchemaManagement: {
      data: ['None']
    },
    ExistingDatabaseSupport: {
      data: 'One-way sync with DBs',
      comment: 'Does not require a datastore, but you can migrate or automatically sync to your database with webhooks/REST API'
    }
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Yjs'],
      comment: 'Standard Yjs API'
    },
    LocalRefreshLatency: {
      data: '<1ms',
      comment: 'Changes on the client: <1ms. Other clients receive updates up to 60 times per second(16ms), configurable.'
    },
    PersistenceMechanism: {
      data: ['Yjs']
    },
    DataModel: {
      data: 'Document'
    },
    SchemaManagement: {
      data: ['None']
    },
    OfflineReads: {
      data: 'Yes',
      comment: 'Beta option: `offlineSupport_experimental: true`'
    },
    OptimisticUpdates: {
      data: 'Yes',
    },
    OfflineWrites: {
      data: 'Yes',
      comment: 'Beta option: `offlineSupport_experimental: true`'
    },
    DataSize: {
      data: 'Limited by memory',
      comment: 'It depends on the in memory size of the Yjs store and the history of the document.'
    }
  },
  SynchronizationStrategy: {
    ConflictHandling: {
      data: 'Automatic via CRDT'
    },
    WhereResolutionOccurs: {
      data: 'Server'
    },
    WhatGetsSynced: {
      data: {
        ClientToServer: 'Yjs encoded updates'
      }
    },
    Authority: {
      data: 'Centralized'
    }
  },
  AuthIdentity: {
    AuthenticationMethod: {
      data: ['Built-in', 'Full Custom']
    },
    AuthorizationPermissions: {
      data: 'ID tokens and access tokens',
      comment: 'ID tokens for permissions based on a per-room basis. Access tokens for permissions granted directly in the token'
    }
  },
  UIRelated: {
    RichTextEditing: {
      data: 'Liveblocks Text Editor',
      comment: 'Wrapper around Yjs with TipTap, BlockNote, and Lexical plugins.'
    },
    Components: {
      data: ['Comments/Threads', 'Notifications', 'AI Copilots', 'Yjs plugins', 'Presence'],
      comment: 'All Liveblocks products integrate into each other. Learn more about the other products on [liveblocks.io](https://liveblocks.io).'
    }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['DevTools', 'Dashboard', 'Data Inspector'],
      comment: 'Viewing/editing data, events, usage, etc.'
    },
    CLI: {
      data: 'CLI for installing examples, updating packages, creating your typescript config.'
    }
  }
})
