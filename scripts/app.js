(function () {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a number: ', function (firstInput) {
    if (isNaN(firstInput)) {
      console.log('❌ That is not a number.');
      rl.close();
      return;
    }

    console.log('✅ First input is a number:', firstInput);

    rl.question('Enter another input: ', function (secondInput) {
      console.log('✅ Second input received:', secondInput);
      rl.close();
    });
  });
})();

