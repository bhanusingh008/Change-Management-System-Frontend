/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_BACKEND_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}