# PatternFly Element | Navigation account element

This is a companion component with pfe-navigation, it creates an account dropdown with appropriate content based on a user's roles and permissions.

## Usage
This component should be a direct child of `pfe-navigation`, and should have the attribute `slot="pfe-navigation--account"`
```html
<pfe-navigation-account slot="pfe-navigation--account"></pfe-navigation-account>
```

If it should be in logged out state:
* `login-link` should be set to a valid login URL

If it should be in a logged in state:
* `logout-link` should be set to a valid logout URL
* The component should be provided the information from the JWT via one of these methods:
  * Using the userData setter: Provide the JSON object from the JWT to the setter. Make a reference to the DOM object and set `.userData`, e.g.:
    ```js
    document.querySelector('pfe-navigation-account').userData = howeverYouGetTheJWT('make it so');
    ```
  * @todo via chapeaux and keycloack.js

For any questions or help, contact the CPFED group.


## Attributes

- `login-link`: Link to login user, required for anonymous users non-keycloack implementations will be put directly into an `<a>` tag.
- `logout-link`: Link to logout user, required for logged in users non-keycloack implementations will be put directly into an `<a>` tag.
- `avatar-url`: Provided by the component, used by `pfe-navigation`
- `full-name`: Provided by the component, used by `pfe-navigation`

## Events
@todo Describe any events that are accessible external to the web component. There is no need to describe all the internal-only functions.


## Dependencies
Is meant to be used inside of pfe-navigation as optional functionality.

## Dev

    `npm start`

## Test

    `npm run test`

## Build

    `npm run build`

## Demo

From the PFElements root directory, run:

    `npm run demo`

## Code style

Navigation-account (and all PFElements) use [Prettier][prettier] to auto-format JS and JSON. The style rules get applied when you commit a change. If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://prettier.io/docs/en/editors.html
[web-component-tester]: https://github.com/Polymer/web-component-tester