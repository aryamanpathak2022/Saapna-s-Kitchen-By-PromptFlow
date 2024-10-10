'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ChefHat, Instagram, Facebook, Twitter, Clock, Users } from "lucide-react"

export function HomePageComponent() {
  return (
    (<div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Saapna's Kitchen</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Recipes</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-secondary py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Discover Delicious Indian Recipes</h2>
            <p className="mb-8">Explore the rich flavors of Indian cuisine with our collection of authentic recipes.</p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <Input
                  type="search"
                  placeholder="Search for recipes..."
                  className="pl-10 pr-4 py-2 w-full" />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button className="ml-2">Search</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipe</h2>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Butter Chicken (Murgh Makhani)</CardTitle>
                <CardDescription>A rich and creamy North Indian curry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="Butter Chicken"
                      className="w-full h-64 object-cover rounded-md mb-4" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center"><Clock className="mr-1" size={16} /> 45 minutes</span>
                      <span className="flex items-center"><Users className="mr-1" size={16} /> Serves 4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside mb-4">
                      <li>500g boneless chicken, cut into cubes</li>
                      <li>1 cup plain yogurt</li>
                      <li>2 tbsp lemon juice</li>
                      <li>2 tsp turmeric powder</li>
                      <li>2 tsp garam masala</li>
                      <li>2 tsp ground cumin</li>
                      <li>2 tbsp butter</li>
                      <li>1 large onion, finely chopped</li>
                      <li>3 garlic cloves, minced</li>
                      <li>1 tbsp ginger, grated</li>
                      <li>2 cups tomato puree</li>
                      <li>1 cup heavy cream</li>
                      <li>Salt to taste</li>
                      <li>Fresh coriander for garnish</li>
                    </ul>
                    <h3 className="font-semibold mb-2">Instructions:</h3>
                    <ol className="list-decimal list-inside">
                      <li>Marinate chicken with yogurt, lemon juice, turmeric, garam masala, and cumin for 2 hours.</li>
                      <li>In a large pan, melt butter and sauté onions until golden brown.</li>
                      <li>Add garlic and ginger, cook for 1 minute.</li>
                      <li>Add tomato puree and cook for 10 minutes.</li>
                      <li>Add marinated chicken and cook for 15 minutes.</li>
                      <li>Stir in cream and simmer for 10 minutes.</li>
                      <li>Season with salt and garnish with coriander.</li>
                      <li>Serve hot with naan bread or rice.</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Print Recipe</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">More Delicious Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {moreRecipes.map((recipe, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{recipe.name}</CardTitle>
                    <CardDescription>{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-48 object-cover rounded-md" />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Recipe</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div
          className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold flex items-center">
              <ChefHat className="mr-2" />
              Saapna's Kitchen
            </h2>
            <p>Bringing the flavors of India to your home</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary"><Instagram /></a>
            <a href="#" className="hover:text-secondary"><Facebook /></a>
            <a href="#" className="hover:text-secondary"><Twitter /></a>
          </div>
        </div>
      </footer>
    </div>)
  );
}

const moreRecipes = [
  {
    name: "Vegetable Biryani",
    description: "Aromatic rice dish with mixed vegetables",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Palak Paneer",
    description: "Spinach curry with Indian cottage cheese",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken in a spiced tomato-based sauce",
    image: "/placeholder.svg?height=200&width=300"
  }
]