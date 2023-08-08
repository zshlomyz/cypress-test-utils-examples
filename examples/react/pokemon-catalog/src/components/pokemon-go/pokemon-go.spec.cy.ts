import { PokemonGoComponent } from "./pokemon-go";
import { PokemonGoComponentDriver } from "./pokemon-go.driver";

describe("React PokemonImageComponent Tests", () => {
  const { when, given, get, beforeAndAfter } = new PokemonGoComponentDriver();
  beforeAndAfter();

  beforeEach(() => {
    given.onSubmitSpy();
    when.render(PokemonGoComponent);
  });
  it("Go button should be disabled", () => {
    expect(get.isGoButtonDisabled().should("eq", "disabled"));
  });

  it("when typing index Go button should be enabled", () => {
    when.typePokemonIndex("33");
    expect(get.isGoButtonDisabled().should("eq", undefined));
  });

  it("when typing index and submiting should call onSubmit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    expect(get.onSubmitSpy().should("have.been.calledWith", "33"));
  });

  it("should not update input value when typing non digits", () => {
    when.typePokemonIndex("abcd-");
    expect(get.pokemonIndexInputValue().should("eq", ""));
  });

  it("should clear input when clicking submit", () => {
    when.typePokemonIndex("33");
    when.clickGo();
    expect(get.pokemonIndexInputValue().should("eq", ""));
  });
});
