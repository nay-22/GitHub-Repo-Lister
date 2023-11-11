
# GitHub Repo Lister
List all repositories of a GitHub user

## Links
[![App Link](https://img.shields.io/badge/Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://repo-lister.s3-website.ap-south-1.amazonaws.com/)


## Tech Stack

**Client:** Angular, TailwindCSS

**Server:** GitHub REST API


## Run Locally

Clone the project

```bash
  git clone https://github.com/nay-22/GitHub-Repo-Lister.git
```

Go to the project directory

```bash
  cd GitHub-Repo-Lister
```

Install dependencies

```bash
  npm install
```

```bash
  npm install --save ngx-ui-loader
```

```bash
  ng add @angular/material
```

Start the server

```bash
  ng serve -o
```

## Running Tests

**Unit Tests For 1 Component and 1 Service with 100% code coverage**
* *Component*: **UserDetailComponent** - should accept type **User** from its parent component
* *Service*: **ApiService** - 
    * should return an **Observable<Repo[]>**
    * should return an **Observable<User>**
To run tests
```bash
  ng test
```


