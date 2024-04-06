import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
    validator: {
      bsonType: 'object',
      required: [
        'name',
        'description',
        'location',
        'ailment',
        'contact',
        'doctor'
      ],
      properties: {
        name: {
          bsonType: 'string',
          description: 'Name of the health care facility'
        },
        description: {
          bsonType: 'string',
          description: 'Description of the health care facility'
        },
        location: {
          bsonType: 'string',
          description: 'Location of the health care facility'
        },
        ailment: {
          bsonType: 'string',
          description: 'Type of ailment treated at the health care facility'
        },
        contact: {
          bsonType: 'string',
          description: 'Contact information for the health care facility'
        },
        doctor: {
          bsonType: 'string',
          description: 'Name of the doctor associated with the health care facility'
        },
        Hospital: {
          bsonType: 'string',
          description: 'Name of the hospital associated with the health care facility'
        }
      }
    }
  });

  export const healthcare = mongoose.model("heal", healthSchema);