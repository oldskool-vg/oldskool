package com.cfvanguard.oldskool.services;

import org.springframework.stereotype.Service;
import com.cfvanguard.oldskool.models.Card;

import java.util.Map;
import java.util.HashMap;

// Regesters this class to be seen in the dependency injection framework of spring boot
// this is a special type of component annotation - it's an interface (see Java docs for interfaces)
@Service
public class CardService {

  // creating a map of string objects from the Card class
  // we're calling the variable cards and assigning it to a new HashMap
  // a HashMap is a data structure that stores key value pairs (this one is empty)
  private Map<String, Card> cards = new HashMap<>();

  public CardService() {
    // adding two new cards to the cards HashMap. Kind of like pushing an object into an array, but it's actually an object in an object
    // the key is anything we want to refer to this instance by (id, name, etc.), the value is a new Card instance with hardcoded properties
    cards.put("Abyss Healer", new Card("Abyss Healer", "https://cfv-card-images.s3.us-east-2.amazonaws.com/43-en.png"));
    cards.put("100% Orange", new Card("100% Orange", "https://cfv-card-images.s3.us-east-2.amazonaws.com/1-en.png"));
  }

  public Card getCard(String name) {
    // getCard method returns the card from the cards HashMap that matches the name passed in
    return cards.get(name);
  }
}
