interface DataResponse {
    uuid: string,
    status: 'disabled' | 'active',
    name: {
      first: string,
      middle: string,
      last: string;
    },
    username: string,
    password: string,
    emails: string[],
    phoneNumber: string,
    budget: {
      0: number,
      1: number,
      2: number,
      3: number,
      4: number,
      5: number,
      6: number,
      7: number,
      8: number,
      9: number,
      10: number,
      11: number,
    },
    location: {
      street: string,
      city: string,
      state: string,
      country: string,
      zip: string,
      coordinates: {
        latitude: number,
        longitude: number,
      }
    },
    website: string,
    domain: string,
    job: {
      title: string,
      descriptor: string,
      area: string,
      type: string,
      company: string,
    },
    creditCard: {
      number: string,
      cvv: number,
      issuer: string
    },
    objectId: string,
}

export { type DataResponse };