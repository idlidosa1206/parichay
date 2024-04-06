import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
    {
        validator: {
          bsonType: 'object',
          required: [
            '_id',
            'username',
            'email',
            'password',
            'profile.name',
            'profile.avatar',
            'profile.birthdate'
          ],
          properties: {
            _id: {
              bsonType: 'objectId',
              description: 'ID should be a valid ObjectId with at most 10 characters'
            },
            username: {
              bsonType: 'string',
              description: 'Username should be at most 20 characters',
              maxLength: 20
            },
            email: {
              bsonType: 'string',
              description: 'Email should be a valid email address',
              pattern: '^\\S+@\\S+\\.\\S+$'
            },
            password: {
              bsonType: 'string',
              description: 'Password should be at most 8 characters, containing at least one capital letter, one special character, and one numeric character',
              pattern: '^(?=.[A-Z])(?=.[!@#$%^&])(?=.[0-9]).{1,8}$'
            },
            profile: {
              bsonType: 'object',
              properties: {
                name: {
                  bsonType: 'string',
                  description: 'Name is required'
                },
                avatar: {
                  bsonType: 'string',
                  description: 'Avatar is required'
                },
                bio: {
                  bsonType: 'string',
                  description: 'Bio can be optional'
                },
                location: {
                  bsonType: 'string',
                  description: 'Location can be optional'
                },
                birthdate: {
                  bsonType: 'date',
                  description: 'Birthdate is required'
                },
                employment: {
                  bsonType: 'object',
                  properties: {
                    current_job: {
                      bsonType: 'string'
                    },
                    skills: {
                      bsonType: 'array',
                      items: {
                        bsonType: 'string'
                      }
                    },
                    education: {
                      bsonType: 'object',
                      properties: {
                        degree: {
                          bsonType: 'string'
                        },
                        institution: {
                          bsonType: 'string'
                        },
                        major: {
                          bsonType: 'string'
                        },
                        completion_date: {
                          bsonType: 'date'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
);



export const User = mongoose.model("user", userSchema);