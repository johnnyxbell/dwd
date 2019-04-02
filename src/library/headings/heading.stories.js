import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Headings', module).add('h1', () => <Heading title="Hi there I'm a heading" />);
