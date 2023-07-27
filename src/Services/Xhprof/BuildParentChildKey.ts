export const buildParentChildKey = (parent: string | null, child: string): string => {
  if (parent !== null) {
    return parent + '==>' + child;
  } else {
    return child;
  }
};
