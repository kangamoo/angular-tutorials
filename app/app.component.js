(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My next Angular App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

/*

 We're creating a visual component named AppComponent by chaining the Component and Class methods that belong to the global Angular core namespace, ng.core.
 The Component method takes a configuration object with three properties. The Class method is where we implement the component itself, giving it properties and methods that bind to the view and whatever behavior is appropriate for this part of the UI.

 For simplicity and to avoid picking favorites, we'll create a single global namespace for our application.
 We'll call it app and we'll add all of our code artifacts to this one global object.

 We don't want to pollute the global namespace with anything else. So within each file we surround the code in an IIFE ("Immediately Invoked Function Expression").
 We pass the global app namespace object into the IIFE, taking care to initialize it with an empty object if it doesn't yet exist.

 Most application files export one thing by adding that thing to the app namespace. Our app.component.js file exports the AppComponent.

 */

