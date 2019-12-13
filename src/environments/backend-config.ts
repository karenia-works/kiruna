export const apiConfig = {
  endpoints: {
    account: {
      login: '/api/account/login',
      info: '/api/account/info/{id}',
    },
    professor: {
      apply: {
        add: '/api/professor/apply',
        query: '/api/professor/apply/{id}',
      },
    },
  },
};
