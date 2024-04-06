import mongoose from "mongoose";

const helpSchema = new mongoose.Schema(
    {
        validator: {
         
            bsonType: 'object',
            required: [
              'name',
              'description',
              'contact',
              'category',
              'data'
            ],
            properties: {
              name: {
                bsonType: 'string',
                description: 'Name of the helpline'
              },
              description: {
                bsonType: 'string',
                description: 'Description of the helpline'
              },
              contact: {
                bsonType: 'string',
                description: 'Contact information for the helpline'
              },
              category: {
                bsonType: 'string',
                description: 'Category of the helpline (NGO, individual, etc.)'
              },
              data: {
                bsonType: 'string',
                description: 'Additional data associated with the helpline'
              }
            }
          }
        
      }
);

export const helpline = mongoose.model("helplines", helpSchema);

