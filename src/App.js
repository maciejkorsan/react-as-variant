import React from 'react';
import Heading from './Heading';

export default function App() {
  return (
    <main>
      <header className="mb-4">
        <Heading as="h1" variant="secondary">
          Hello StackBlitz!
        </Heading>
        <p>Start editing to see some magic happen :)</p>
      </header>
      <section>
        <Heading as="h2" variant="primary">
          Another heading
        </Heading>
        <p>lorem ipsum dolor sit amet</p>
      </section>
    </main>
  );
}
