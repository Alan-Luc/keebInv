package main

import (
	"fmt"

	"github.com/gocolly/colly"
)

func main() {
	c := colly.NewCollector(
		colly.AllowedDomains("shockport.ca"),
	)

	// Find and print all links
	// c.OnHTML(".payment-buttons", func(e *colly.HTMLElement) {
	// 	spans := e.ChildAttrs("button", "span")
	// 	fmt.Println(spans)
	// })

	c.OnHTML(".icon-and-text", func(e *colly.HTMLElement) {
		e.ForEach("span", func(_ int, elem *colly.HTMLElement) {
			fmt.Println(elem.Text)
		})
	})
	c.OnHTML("payment-buttons", func(e *colly.HTMLElement) {
		e.ForEach("span", func(_ int, elem *colly.HTMLElement) {
			fmt.Println(elem.Text)
		})
	})
	c.Visit("https://shockport.ca/products/gateron-black-ink-v2-5-pin")
	fmt.Println("black inks")
	c.Visit("https://shockport.ca/collections/cases/products/dz65-rgb-v3-hot-swap-pcb")
	fmt.Println("pcb")
}
