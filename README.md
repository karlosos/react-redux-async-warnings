# React 18 - Redux Warnings when Testing

## Warnings

```
  console.error
    Warning: An update to App inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
        at App (/home/karlosos/Dev/nokia/playground/testing-redux/src/App.tsx:6:34)
        at Provider (/home/karlosos/Dev/nokia/playground/testing-redux/node_modules/react-redux/lib/components/Provider.js:19:3)
        at Wrapper (/home/karlosos/Dev/nokia/playground/testing-redux/src/testUtils.tsx:11:22)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at forceStoreRerender (node_modules/react-dom/cjs/react-dom.development.js:16977:5)
      at Object.handleStoreChange [as callback] (node_modules/react-dom/cjs/react-dom.development.js:16953:7)
      at node_modules/react-redux/lib/utils/Subscription.js:23:20

  console.error
    Warning: An update to App inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
        at App (/home/karlosos/Dev/nokia/playground/testing-redux/src/App.tsx:6:34)
        at Provider (/home/karlosos/Dev/nokia/playground/testing-redux/node_modules/react-redux/lib/components/Provider.js:19:3)
        at Wrapper (/home/karlosos/Dev/nokia/playground/testing-redux/src/testUtils.tsx:11:22)

      at printWarning (node_modules/react-dom/cjs/react-dom.development.js:86:30)
      at error (node_modules/react-dom/cjs/react-dom.development.js:60:7)
      at warnIfUpdatesNotWrappedWithActDEV (node_modules/react-dom/cjs/react-dom.development.js:27589:9)
      at scheduleUpdateOnFiber (node_modules/react-dom/cjs/react-dom.development.js:25508:5)
      at forceStoreRerender (node_modules/react-dom/cjs/react-dom.development.js:16977:5)
      at Object.handleStoreChange [as callback] (node_modules/react-dom/cjs/react-dom.development.js:16953:7)
      at node_modules/react-redux/lib/utils/Subscription.js:23:20

 PASS  src/App.test.tsx
  App test
    ✓ WHEN component rendered THEN counter value is being loaded (71 ms)
    ✓ WHEN refetch button clicked THEN counter value is being reloaded (41 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.714 s, estimated 1 s
Ran all test suites related to changed files.
```

## Available Scripts

- `npm start`
- `npm test`
