import mongoose from "mongoose";

const empSchema = new mongoose.Schema(
    {
        validator: {
          bsonType: 'object',
          required: [
            'title',
            'description',
            'location',
            'salary',
            'requirement',
            'company.name',
            'company.logo',
            'company.link'
          ],
          properties: {
            title: {
              bsonType: 'string',
              description: 'Title of the employment listing'
            },
            description: {
              bsonType: 'string',
              description: 'Description of the employment listing'
            },
            location: {
              bsonType: 'string',
              description: 'Location of the employment listing'
            },
            salary: {
              bsonType: 'string',
              description: 'Salary range of the employment listing'
            },
            requirement: {
              bsonType: 'string',
              description: 'Requirements for the employment listing'
            },
            company: {
              bsonType: 'object',
              properties: {
                name: {
                  bsonType: 'string',
                  description: 'Name of the company offering the job'
                },
                logo: {
                  bsonType: 'string',
                  description: 'Logo URL of the company offering the job'
                },
                link: {
                  bsonType: 'string',
                  description: 'Website link of the company offering the job'
                }
              }
            }
          }
        }
      }
)

export const employement = mongoose.model("employ", empSchema);