export default {
    name: 'contact',
    type: 'document',
    title: 'Contact',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'message',
        type: 'string',
        title: 'Message'
      },
      {
        name: 'policy',
        type: 'boolean',
        title: 'Policy'
      },{
        name: 'typeOfRequest',
        type: 'string',
        title: 'Type of request'
      }
    ]
  }