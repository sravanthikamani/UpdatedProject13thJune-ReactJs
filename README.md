In this project let's build a **Travel Trip** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a component, routing concepts, authentication and authorization, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You can request for the feedback after your project submission in the discussions.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">website</a>
- Create a Free account in Figma.
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a free Figma account. Watch the video upto **00:50**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in a Figma screen. Watch the video upto **02:45**.
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from a Figma screen.
  - Click on the Export button to get Export options as shown in the below image.

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://www.figma.com/file/XoGFET0MdppCNgH6RhvcQe/Mini-Project---Travel-Trip?type=design&node-id=0-3523&mode=design&t=S89jMW84CTwn2Mkc-11" target="_blank">this</a> session for better understanding.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/XoGFET0MdppCNgH6RhvcQe/Mini-Project---Travel-Trip?type=design&node-id=0-3523&mode=design&t=S89jMW84CTwn2Mkc-11" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Login Route**

  - When an invalid credentials are provided and the **Login** button is clicked, then the respective error message received from the response should be displayed
  - When a valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, Book A New Trip Route and My Trips Route, then the page should be navigated to Login Route
  - When an _authenticated_ user tries to access the Home Route, Book A New Trip Route and My Trips Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** eye icon is clicked, then the password should be shown
  - When the **Show Password** eye icon is clicked again, then the password should be masked

- **Home Route**

  - When an _authenticated_ user opens the Home Route
    - Clicks on the **Book A New Trip** button, then the page should be navigated to the Book A New Trip Route

- **Book A New Trip Route**

  - When the Book A New Trip Route is opened, the user should be able to see a **Your Details** form with inputs **Name**, **Start Location**, **End Location** and **Next** button.
    - **Your Details** step should be displayed as an active step as shown in the Figma.
      - The user should be able to click the **Next** button. When clicked, the user should see
        - The error message `Enter your name`, if the **Name** input is empty.
        - The error message `Enter your start location`, if the **Start Location** input is empty.
        - The error message `Enter your end location`, if the **End Location** input is empty.
        - The **Date Selection** form should be displayed if the valid values are provided.
    - **Your Details** step should be displayed as a completed step and **Date Selection** should be displayed as an active step as shown in the figma.
    - In the **Date Selection** form, the user should be able to see a form with inputs **Start Date** and **End Date**.
    - The user should be able to click the **Previous** button. When clicked, the user should see the Your Details Form and input values should be persisted and the user should be able to update the input values and submit them again.
    - The user should be able to click the **Next** button. When clicked, the user should see
      - The error message `Select start date`, if the **Start Date** input is empty.
      - The error message `Select end date`, if the **End Date** input is empty.
      - The error message `The end date cannot be less than the start date`, if the **End Date** input value is less than the **Start Date** input value.
      - The **Guests** form should be displayed if the valid values are provided.
    - **Your Details** and **Date Selection** steps should be displayed as completed steps.
    - In the **Guests** section, the user should be able to see a section with **Adults**, **Children** and **Infants**.
    - **Guests** should be displayed as an active step as shown in the figma.
    - The user should be able to see
      - By default, Adults are set to one (Considering the user) and can be increased, but cannot be decreased to a value less than one.
      - By default, Children are set to zero and can be increased, but cannot be decreased to a value less than zero.
      - By default, Infants are set to zero and can be increased, but cannot be decreased to a value less than zero.
    - The user should be able to click the **Previous** button. When clicked, the user should see the Date Selection form and input values should be persisted and the user should be able to update the input values and submit them again.
    - The user should be able to click the **Next** button. When clicked, the user should see the **Travel Assistance** form.
    - In the **Travel Assistance** form, the user should be able to see a form with Travel assistance needed input.
    - **Your Details, Date Selection** and **Guests** steps should be displayed as completed steps.
    - **Travel Assistance** should be displayed as an active step as shown in figma.
    - The user should be able to check the Travel Assistance Needed checkbox. When checked, the user should see Travel Assistance should be displayed, and able to select an option.
    - The user should be able to click the **Previous** button. When clicked, the user should see the Guests and count should be persisted and the user should be able to update the counts.
    - The user should be able to click the **Next** button. When clicked, the user should see the **Confirmation** form.
    - In the **Confirmation** form, the user should be able to see all the steps details.
    - **Your Details, Date Selection, Guests** and **Travel Assistance** steps should be displayed as completed steps.
    - **Confirmation** should be displayed as an active step as shown in the figma.
    - The user should be able to click the **Cancel** button. When clicked, the user should see the **Your Details** form with empty input values.
    - The user should be able to click the **Confirm** button. When clicked, the user should see the Confirmed message and **Book New Trip** button to book a new trip.

- **My Trips Route**

  - When the **My Trips** route is opened,
    - The users should be able to see the Trips details in the cards as shown in the figma.
    - If there is no trips created, then the No trips screen should be displayed as shown in the figma.

- **Header**

  - When the **website logo** text is clicked, then the page should be navigated to the Home Route
  - When the **Home** link is clicked, then the page should be navigated to the Home Route
  - When the **My Trips** link is clicked, then the page should be navigated to the My Trips Route
  - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- Users should be able to view the website responsively in mobile view, tablet view as well

</details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - For Mini Projects, You have to use HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled components.
  - Refer to the below Example for the usage of `data-testid` in the HTML elements
    - Example: `<div data-testid="questionItem" className="question-item"/>`

- **Routes**

  - `Home` Route should consist of `/` in the URL path
  - `My Trips` Route should consist of `/my-trips` in the URL path
  - `Book A New Trip` Route should consist of `/book-a-new-trip` in the URL path

  - **Header**

    - The Travel Trip Logo text in Header should consist of font-family value as `Caveat`

- **Login Route**

  - The Travel Trip Logo text should consist of of font-family value as `Caveat`.
  - The HTML button element with show password eye icon should have the `data-testid` attribute value as **show-password** to it

- **Book A New Trip Route**

  - The successfully completed image which displayed before the step should have the alt as the value of the key `displayText` from the initial steps list provided.
  - The successfully completed image which displayed in the confirmed message should have the alt as **success**.

- **Not Found Route**
  - The Not Found image should consist of alt attribute value as `not found`
- **Kindly follow the screens as shown in figma**

</details>

### Resources

<details>
<summary>Image URLs</summary>

[https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png](https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #304766; width: 150px; padding: 10px; color: white">Hex: #304766</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: white">Hex: #ffffff</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: white">Hex: #2563eb</div>
<div style="background-color: #dbeafe; width: 150px; padding: 10px; color: white">Hex: #dbeafe</div>

<br/>

**Text Colors**:

<div style="background-color: #334155; width: 150px; padding: 10px; color: black">Hex: #334155</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: black">Hex: #2563eb</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: black">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: white">Hex: #ffffff</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: white">Hex: #f1f5f9</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<br/>

**Border Colors**

<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>

</details>

<details>
<summary>Font-families</summary>

- Caveat
- Roboto

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
