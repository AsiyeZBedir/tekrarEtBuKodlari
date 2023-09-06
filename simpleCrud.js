//new ekle

const yargs = require('yargs');

yargs.command({
  command: 'new',
  describe: 'Add a new todo item',
  builder: {
    task: {
      describe: 'Task description',
      demandOption: true, // Task description is required
      type: 'string',
    },
  },
  handler: function (argv) {
    // Burada yeni görevi ekleyen kodu yazabilirsiniz
    console.log('New task added:', argv.task);
  },
});

yargs.parse();

// list
yargs.command({
  command: 'list',
  describe: 'List todo items',
  builder: {
    status: {
      describe: 'Filter by status (all, pending, done)',
      type: 'string',
      default: 'all', // Varsayılan olarak tüm görevleri listeler
    },
  },
  handler: function (argv) {
    // Burada görevleri listelemek için kodu yazabilirsiniz
    console.log(`List of ${argv.status} tasks:`);
    // TODO: Görevleri listeleme kodunu ekleyin
  },
});

//done

yargs.command({
  command: 'done',
  describe: 'Update a todo item',
  builder: {
    id: {
      describe: 'Task ID to mark as done',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    // Burada görevi güncellemek için kodu yazabilirsiniz
    console.log(`Task ${argv.id} marked as done`);
    // TODO: Görevi güncelleme kodunu ekleyin
  },
});

//delete
yargs.command({
  command: 'delete',
  describe: 'Delete a todo item',
  builder: {
    id: {
      describe: 'Task ID to delete',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    // Burada görevi silmek için kodu yazabilirsiniz
    console.log(`Task ${argv.id} deleted`);
    // TODO: Görevi silme kodunu ekleyin
  },
});

//























