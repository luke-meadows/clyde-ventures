export const sidebarVariant = {
  initial: {
    x: '100%',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.5 },
  },
};

export const sidebarInnerVariant = {
  initial: {
    opacity: 0,
    x: '-10%',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.35,
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const headerVariant = {
  static: {
    y: '0',
  },
  initial: {
    y: '-100%',
  },
  enter: {
    y: '0',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.3 },
  },
};
export const headerVariant2 = {
  initial: {
    y: '-100%',
  },
  enter: {
    y: '0',
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.1 },
  },
};
