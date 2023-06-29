package com.cfvanguard.oldskool.models;

public class Card {
  // Here we are declaring what a Card class looks like, similar to a schema in a database.
  // Note these names and types should match the fields we eventually want to get back from the cfvanguard API
  private String name;
  private String imageurlen;

  // create a constructor that takes in name and imageurlen
  public Card(String name, String imageurlen) {
    this.name = name;
    this.imageurlen = imageurlen;
  }

  // create a default constructor that takes in no arguments (I think this is why ppl make fun of Java)
  public Card() {
  }

  // create getters and setters for name and imageurlen (this also feels silly)
  // Note: there is a library called lombok that will abstract this away and create getters and setters for you
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getImageurlen() {
    return imageurlen;
  }
  public void setImageurlen(String imageurlen) {
    this.imageurlen = imageurlen;
  }

}



