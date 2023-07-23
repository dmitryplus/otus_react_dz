export const parseParentChild = (parent_child: string) => {
  const ret = parent_child.split('==>');

  if (ret[1] !== undefined) {
    return { parent: ret[0], child: ret[1] };
  }

  return { parent: null, child: ret[0] };
};
