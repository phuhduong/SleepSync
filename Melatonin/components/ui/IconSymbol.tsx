// This file is a fallback for using MaterialIcons on Android and web.

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconSymbolProps {
  name: string;
  size: number;
  color: string;
}

export function IconSymbol({ name, size, color }: IconSymbolProps) {
  // Map SF Symbols names to MaterialCommunityIcons names
  const iconMap: { [key: string]: string } = {
    'house.fill': 'home',
    'paperplane.fill': 'paper-plane',
    'person.fill': 'account',
    'chart.bar.fill': 'chart-bar',
    'gear': 'cog',
  };

  return (
    <MaterialCommunityIcons
      name={iconMap[name] || name}
      size={size}
      color={color}
    />
  );
}
