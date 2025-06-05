Cozy Bootstrap
==============

## What is Cozy?

![Cozy Logo](https://cdn.rawgit.com/cozy/cozy-guidelines/master/templates/cozy_logo_small.svg)

[Cozy](https://cozy.io) is a platform that brings all your web services in the
same private space. With it, your web apps and your devices can share data
easily, providing you with a new experience. You can install Cozy on your own
hardware where no one profiles you.

## Cozy Bootstrap

Cozy Bootstrap is a theme for [Bootstrap](https://getbootstrap.com/) with Cozy
look and colors.

## Commit message

We follow [cozy guidelines](https://docs.cozy.io/cozy-guidelines/#commit-messages).

## Tests

We are using backstopjs to run some tests, with screenshots compared to a
reference.

To run the test, we need to execute `npm run docs` in one terminal, and `npm
test` in another. If there are some differences, we can review them by using
`npm run test:open` to open a browser tab with the screenshots and the diffs.
If it looks good, we can then run `npm run test:approve` to copy the new
screenshots and make them the new reference. Don't forget to commit them to
keep the CI green.

## Community

You can reach the Cozy Community by:

* Chatting with us on IRC #cozycloud on [Libera.Chat](https://web.libera.chat/#cozycloud)
* Posting on our [Forum](https://forum.cozy.io)
* Posting issues on the [Github repos](https://github.com/cozy/)
* Mentioning us on [Twitter](https://twitter.com/cozycloud)
