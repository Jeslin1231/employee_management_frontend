import { gql } from '@apollo/client';

export const ONBOARDING = gql`
  mutation Onboarding($data: OnboardingDataInput!) {
    onboarding(data: $data) {
      api
      type
      status
      message
    }
  }
`;

export const FETCH = gql`
  query Employee($employee: String!) {
    employee(employee: $employee) {
      _id
      firstName
      lastName
      middleName
      preferredName
      email
      ssn
      dateOfBirth
      gender
      apartment
      streetAddress
      city
      state
      zip
      cellPhone
      workPhone
      feedback
      citizenship
      visaType
      visaStartDate
      visaEndDate
      referralFirstName
      referralMiddleName
      referralLastName
      referralEmail
      referralPhone
      referralRelationship
      emergencyContacts {
        id
        firstName
        lastName
        middleName
        relationship
        email
        phone
      }
      documents {
        file
        type
      }
    }
  }
`;

export const FEEDBACK = gql`
  mutation OnBoardingFeedback(
    $employee: String!
    $feedback: String!
    $status: String!
  ) {
    onBoardingFeedback(
      employee: $employee
      feedback: $feedback
      status: $status
    ) {
      api
      type
      status
      message
    }
  }
`;
