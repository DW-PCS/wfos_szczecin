'use client';

import { initialFAQComponents } from '@/constants/faq';
import { useFAQState } from '@/hooks/use-faq-state';
import { FAQComponent, FAQItemType } from '@/types/faq';
import { useState } from 'react';
import { FAQEmptyState } from './faq-empty-state';
import { FAQHelpSection } from './faq-help-section';
import { FAQList } from './faq-list';
import { FAQSearchBar } from './faq-search-bar';
import { FAQSectionHeader } from './faq-section-header';
import { flattenFAQItems } from '@/lib/utils/faq';



export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = flattenFAQItems(initialFAQComponents);

  const { openItems, toggleItem, filteredItems } = useFAQState(faqItems, searchQuery);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <FAQSectionHeader />

        <FAQSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <div className="max-w-5xl mx-auto">
          {filteredItems.length > 0 ? (
            <FAQList
              items={filteredItems}
              originalItems={faqItems}
              openItems={openItems}
              onToggleItem={toggleItem}
            />
          ) : (
            <FAQEmptyState searchQuery={searchQuery} onClearSearch={() => setSearchQuery('')} />
          )}

          <FAQHelpSection />
        </div>
      </div>
    </section>
  );
}
