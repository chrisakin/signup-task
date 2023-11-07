A single Page Application built with Angular 16, CSS and Tailwind.

The Task: 
Build a single page application signup form, using Angular. 

Submit user information using a rest api(e.g firebase) and populate the users on another view.

Once user is submitted, the first user is approved by an admin, and a temp key is generated which allows the user to login 

Default user “admin” can only approve the first user, but every new user becomes an admin automatically once approved by the last user before them (similar process happens as stated above).

The users can only perform crud operation on the records they are admin for. that is remove, update existing records, a user cannot remove or update their own record.

Your backend can be mocked(you can also use data from this endpoint data from this url https://reqres.in)

The Solution:
A new Angular App was created using ng new signup-task,
Under the src folder i created 4 folders components, layouts, pages and service

The component folder holds my components such a buttons, loading icon, password-toggle icon
The layouts folder holds my navbar, sidebar, table
The service folder holds my dircetives, guards, http-service, interceptors, models and general service
Under the directives, i have the prevent-invalid-click directive to prevent a button click if it was not the admin that approved the user

Under the guards, i have my auth guard to prevent a user from accessing the dashboard if he is not approved or loggedin

under my http-service i have the auth and dashboard service. The http service enables my call to the backend

Under my interceptors, i have the errors and jwt interceptor to intercept all request to check if the user has a token or not. If the user doesnt have a token, it takes the user to the login page to signin
And my errors interceptor to check for the error messages coming from the backend, if the error includes 404 it logs the user out

And my models to house my user models

The pages folder holds my auth and dashboard pages where all the major implementations are joined together for the app visitor to view

A simple backend was created on my localhost to hold and test the datas

