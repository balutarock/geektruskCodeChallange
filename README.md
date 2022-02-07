# Geetrust

[![N|Solid](https://geektrust.sgp1.cdn.digitaloceanspaces.com/assets/images/adminui-prob-users-table.png)](https://geektrust.sgp1.cdn.digitaloceanspaces.com/assets/images/adminui-prob-users-table.png)

### Users API:

We provide you an Users API to list all the users and their properties.

`Note:` The users are sorted by `id` field. There is no alphabetical sorting.

`Endpoint:` [https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)

### Request Type: `GET`

### Sample Response:

### [

    {
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    }

]

## These are the requirements:

1. Column titles must stand out from the entries.

2. There should be a search bar that can filter on any property.

3. You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)

4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.

5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.

6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

In this project, let's build an **Even Odd App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/even-odd-app-output.gif" alt="even-odd-app-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/even-odd-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/even-odd-lg-output.png)

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

- Initially, the count should be **0** and **Count is Even** text should be displayed
- When the **Increment** button is clicked,
  - The count should be increased by a random value between 0 to 100
  - If the incremented count is an even number, then the **Count is Even** text should be displayed
  - If the incremented count is an odd number, then the **Count is Odd** text should be displayed

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/EvenOddApp/index.js`
- `src/components/EvenOddApp/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>
**The following instructions are required for the tests to pass**

- Achieve the given layout using only Conditional Rendering
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ff6e7f ; width: 150px; padding: 10px; color: white">Hex: #ff6e7f</div>
<div style="background-color: #bfe9ff ; width: 150px; padding: 10px; color: black">Hex: #bfe9ff</div>
<div style="background-color: #0f172a ; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #334155 ; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #1e293b ; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
