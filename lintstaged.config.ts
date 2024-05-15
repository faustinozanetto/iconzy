module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames: string[]) => {
    const lintStagedTasks = [`eslint --fix ${filenames.join(' ')}`, `prettier --write ${filenames.join(' ')}`];

    return lintStagedTasks;
  },
};
