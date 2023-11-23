import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor() { }

  public motivationalQuotes: { body: string; author: string }[] = [
    { body: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { body: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { body: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { body: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { body: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { body: "When life gives you lemons, make lemonade.", author: "Unknown" },
    { body: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { body: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { body: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { body: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { body: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { body: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { body: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { body: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { body: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { body: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { body: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { body: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { body: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { body: "If you want to achieve greatness, stop asking for permission.", author: "Unknown" },
    { body: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { body: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { body: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { body: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { body: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
    { body: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { body: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    { body: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { body: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" },
    { body: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { body: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { body: "The more you learn, the more you earn.", author: "Warren Buffett" },
    { body: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { body: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
    { body: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { body: "If you don’t build your dream, someone else will hire you to help them build theirs.", author: "Dhirubhai Ambani" },
    { body: "The best revenge is massive success.", author: "Frank Sinatra" },
    { body: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu" },
    { body: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { body: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { body: "There is no substitute for hard work.", author: "Thomas Edison" },
    { body: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
    { body: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { body: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { body: "You must expect great things of yourself before you can do them.", author: "Michael Jordan" },
    { body: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { body: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { body: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { body: "The difference between a stumbling block and a stepping stone is how you use them.", author: "Unknown" }
];

}
