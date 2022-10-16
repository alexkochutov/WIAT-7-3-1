const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Should sort in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should return not sorted list", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
      ])
    ).toEqual([
        "Властелин Колец",
        "Властелин Колец",
    ]);
  });
});