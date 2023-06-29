package com.cfvanguard.oldskool.controllers;

import java.util.Optional;

// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cfvanguard.oldskool.models.Card;
import com.cfvanguard.oldskool.services.CardService;

@RestController
public class Routes {
  // Routes has a dependency on the CardService class, similar to how we import a controller's method in JS
  private CardService service;

  // this is a constructor that takes in a CardService object and assigns it to the service variable
  // this is called dependency injection, and is a way to separate concerns. We don't want our controller to
  // know how to create a CardService, we just want it to use it. Dependency injections don't use the 'new' keyword
  // instead, behind the scenes, spring boot will create a CardService object and pass it in to this constructor
  // this makes it easier to test our code, because we can pass in a fake CardService object that we create
  // it also makes it easier to change our code, because we can change the CardService object without changing the controller
  public Routes(CardService cardService) {
    this.service = cardService;
  }
  @GetMapping("/cards")
  // calling the getCard method on the CardService object that was passed in to the constructor
  // the endpoint will have query parameters for a specific card like: /cards?name=Abyss Healer
  public ResponseEntity<Card> getCard(@RequestParam String name) {
    // Use the HTTP response entity to return a 200 status code and the body, which is accessing
    // the getCard method on the service object by name (the query parameter and the key we gave it earlier)

    // if the Optional of nullable returns true, it will do an HTTP 404, otherwise it will do an HTTP 200
    return ResponseEntity.of(Optional.ofNullable(service.getCard(name)));
  }
}


