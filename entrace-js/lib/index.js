module.exports = {
  entrace: function(site) {
    // Initialize as
    // 1. http://entrace.tech/account
    // 2. Insert the following into your site:
    //     <script>
    //       window.onerror = entrace(12345);
    //     </script>
    return function(message, source, lineno, colno, error) {

    };
  }
};
