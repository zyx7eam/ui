'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription } from '@zyxui/card';
import Button from '@zyxui/button';
import {
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  MoreVerticalIcon,
  StarIcon,
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon
} from 'lucide-react';

const CardExample = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Card Component Examples</h1>
          <p className="text-lg text-gray-600">
            Comprehensive examples of the Card component with various configurations
          </p>
        </div>

        {/* Basic Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardBody>
                <p>This is a basic card with just body content.</p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Header</CardTitle>
              </CardHeader>
              <CardBody>
                <p>This card includes a header with a title.</p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Card</CardTitle>
                <CardDescription>With description</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This card has header, body, and footer sections.</p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
              </CardHeader>
              <CardBody>
                <p>Card with shadow effect for depth.</p>
              </CardBody>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined</CardTitle>
              </CardHeader>
              <CardBody>
                <p>Card with border outline.</p>
              </CardBody>
            </Card>

            <Card variant="filled">
              <CardHeader>
                <CardTitle>Filled</CardTitle>
              </CardHeader>
              <CardBody>
                <p>Card with filled background.</p>
              </CardBody>
            </Card>

            <Card variant="ghost">
              <CardHeader>
                <CardTitle>Ghost</CardTitle>
              </CardHeader>
              <CardBody>
                <p>Card with transparent background.</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
          <div className="space-y-6">
            <Card size="sm">
              <CardHeader>
                <CardTitle>Small Card</CardTitle>
                <CardDescription>Compact padding for dense layouts</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This card has small padding throughout.</p>
              </CardBody>
            </Card>

            <Card size="md">
              <CardHeader>
                <CardTitle>Medium Card</CardTitle>
                <CardDescription>Standard padding for most use cases</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This card has medium padding throughout.</p>
              </CardBody>
            </Card>

            <Card size="lg">
              <CardHeader>
                <CardTitle>Large Card</CardTitle>
                <CardDescription>Generous padding for spacious layouts</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This card has large padding throughout.</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Interactive Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Interactive Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hoverable className="cursor-pointer">
              <CardHeader>
                <CardTitle>Hoverable Card</CardTitle>
                <CardDescription>Hover to see the interaction effect</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This card has hover effects enabled.</p>
              </CardBody>
            </Card>

            <Card onClick={() => alert('Card clicked!')}>
              <CardHeader>
                <CardTitle>Clickable Card</CardTitle>
                <CardDescription>Click to trigger an action</CardDescription>
              </CardHeader>
              <CardBody>
                <p>This entire card is clickable.</p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Real-World Examples</h2>

          {/* Product Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Product Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hoverable className="cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Premium Headphones</CardTitle>
                      <CardDescription>Wireless noise-cancelling</CardDescription>
                    </div>
                    <BookmarkIcon size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.8 (124)</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">$299</p>
                    <p className="text-sm text-gray-600">Free shipping • 30-day returns</p>
                  </div>
                </CardBody>
                <CardFooter className="space-x-2">
                  <Button className="flex-1" size="sm">Add to Cart</Button>
                  <Button variant="ghost" size="sm">
                    <HeartIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>

              <Card hoverable className="cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Smart Watch</CardTitle>
                      <CardDescription>Fitness tracking & notifications</CardDescription>
                    </div>
                    <BookmarkIcon size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4].map((star) => (
                        <StarIcon key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <StarIcon size={16} className="text-gray-300" />
                      <span className="text-sm text-gray-600 ml-2">4.2 (89)</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">$199</p>
                    <p className="text-sm text-gray-600">Limited time offer</p>
                  </div>
                </CardBody>
                <CardFooter className="space-x-2">
                  <Button className="flex-1" size="sm">Add to Cart</Button>
                  <Button variant="ghost" size="sm">
                    <HeartIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>

              <Card hoverable className="cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Bluetooth Speaker</CardTitle>
                      <CardDescription>Portable & waterproof</CardDescription>
                    </div>
                    <BookmarkIcon size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">5.0 (203)</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">$79</p>
                    <p className="text-sm text-gray-600">Best seller</p>
                  </div>
                </CardBody>
                <CardFooter className="space-x-2">
                  <Button className="flex-1" size="sm">Add to Cart</Button>
                  <Button variant="ghost" size="sm">
                    <HeartIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* User Profile Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Profile Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <UserIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle>Alice Johnson</CardTitle>
                      <CardDescription>Frontend Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon size={14} className="mr-2" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon size={14} className="mr-2" />
                      Joined March 2023
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">Follow</Button>
                  <Button variant="ghost" size="sm">Message</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <UserIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle>Bob Smith</CardTitle>
                      <CardDescription>UX Designer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon size={14} className="mr-2" />
                      New York, NY
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon size={14} className="mr-2" />
                      Joined January 2022
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">Follow</Button>
                  <Button variant="ghost" size="sm">Message</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <UserIcon size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle>Carol Davis</CardTitle>
                      <CardDescription>Product Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon size={14} className="mr-2" />
                      Austin, TX
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon size={14} className="mr-2" />
                      Joined September 2021
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">Follow</Button>
                  <Button variant="ghost" size="sm">Message</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Article/Blog Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Article Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hoverable className="cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle>Building Better User Interfaces</CardTitle>
                      <CardDescription>
                        Learn the fundamentals of creating intuitive and accessible user interfaces.
                      </CardDescription>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>John Doe</span>
                        <span>•</span>
                        <span>5 min read</span>
                        <span>•</span>
                        <span>March 15, 2024</span>
                      </div>
                    </div>
                    <MoreVerticalIcon size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">
                    Discover the principles and best practices for designing user interfaces that are both
                    beautiful and functional. This comprehensive guide covers everything you need to know.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button variant="ghost" size="sm">Read More</Button>
                  <div className="flex space-x-2 ml-auto">
                    <Button variant="ghost" size="sm">
                      <HeartIcon size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ShareIcon size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card hoverable className="cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle>Advanced React Patterns</CardTitle>
                      <CardDescription>
                        Explore advanced patterns and techniques for building scalable React applications.
                      </CardDescription>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Jane Smith</span>
                        <span>•</span>
                        <span>8 min read</span>
                        <span>•</span>
                        <span>March 10, 2024</span>
                      </div>
                    </div>
                    <MoreVerticalIcon size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">
                    Deep dive into compound components, render props, and other advanced React patterns
                    that will make your code more reusable and maintainable.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button variant="ghost" size="sm">Read More</Button>
                  <div className="flex space-x-2 ml-auto">
                    <Button variant="ghost" size="sm">
                      <HeartIcon size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ShareIcon size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Event Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-700">Event Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Conference 2024</CardTitle>
                  <CardDescription>Annual gathering of design professionals</CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon size={16} className="mr-2 text-gray-500" />
                      <span>April 15-17, 2024</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ClockIcon size={16} className="mr-2 text-gray-500" />
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon size={16} className="mr-2 text-gray-500" />
                      <span>Convention Center, SF</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">Register</Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>React Meetup</CardTitle>
                  <CardDescription>Monthly React developer meetup</CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon size={16} className="mr-2 text-gray-500" />
                      <span>March 28, 2024</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ClockIcon size={16} className="mr-2 text-gray-500" />
                      <span>7:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon size={16} className="mr-2 text-gray-500" />
                      <span>Tech Hub, Downtown</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">RSVP</Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UX Workshop</CardTitle>
                  <CardDescription>Hands-on user experience design workshop</CardDescription>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon size={16} className="mr-2 text-gray-500" />
                      <span>April 5, 2024</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ClockIcon size={16} className="mr-2 text-gray-500" />
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon size={16} className="mr-2 text-gray-500" />
                      <span>Design Studio, SoMa</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button size="sm" className="flex-1">Join Workshop</Button>
                  <Button variant="ghost" size="sm">
                    <ShareIcon size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardExample;
