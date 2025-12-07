import { Injectable } from '@angular/core';
import { ArticleItem } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: ArticleItem[] = [
    {
      id: 1,
      title: 'The Evolution of Contemporary Egyptian Art: Bridging Tradition and Modernity',
      summary: 'An in-depth exploration of how contemporary Egyptian artists navigate the relationship between ancient cultural heritage and modern artistic expression.',
      fullContent: `Contemporary Egyptian art stands at a fascinating crossroads where millennia of cultural heritage meets the dynamic currents of global modern art movements. This intersection creates a unique artistic landscape that challenges both artists and viewers to reconsider the relationship between tradition and innovation.

The journey of contemporary Egyptian art began in the early 20th century with pioneers like Mahmoud Mokhtar and Ragheb Ayad, who sought to create distinctly Egyptian forms of artistic expression while engaging with European artistic traditions. Their legacy continues to influence today's artists who grapple with similar questions of identity and authenticity.

Key themes in contemporary Egyptian art:

Cultural Identity and Heritage:
Modern Egyptian artists consistently explore themes of cultural identity, often incorporating ancient Egyptian motifs, Islamic geometric patterns, and traditional craftsmanship into contemporary mediums. This approach creates a dialogue between past and present that resonates with both local and international audiences.

Social Commentary:
Many contemporary works serve as vehicles for social and political commentary, addressing issues such as urbanization, economic disparity, and social change. Artists use traditional symbols and imagery to communicate contemporary concerns, making their work accessible to diverse audiences.

Material Innovation:
While honoring traditional techniques, contemporary artists experiment with new materials and methods. This includes incorporating digital technology, recycled materials, and unconventional media into traditional art forms.

Global Context:
Egyptian artists today participate in international exhibitions and residencies, bringing global perspectives to their work while maintaining connections to their cultural roots. This international exposure influences both their artistic development and the global perception of Egyptian culture.

Notable contemporary movements:
- Neo-Pharaonic art: Reinterpretation of ancient Egyptian aesthetics
- Islamic geometric abstraction: Modern applications of traditional patterns
- Social realism: Contemporary treatments of social and political themes
- Conceptual art: Exploration of ideas about identity and culture

The challenge facing contemporary Egyptian artists is maintaining authenticity while remaining relevant in a globalized art world. Success in this endeavor requires not only technical skill but also deep understanding of both historical traditions and contemporary contexts.

This balance continues to evolve as new generations of artists emerge, each bringing fresh perspectives to the ongoing conversation between Egypt's artistic past and its creative future.`,
      imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-01'),
      author: 'Dr. Layla Kassem',
      category: 'article',
      readMoreUrl: '/news-details/1',
      featured: true,
      relatedItems: [2, 3, 4]
    },
    {
      id: 2,
      title: 'Digital Art and the Future of Creative Education',
      summary: 'How digital technologies are reshaping art education and preparing students for careers in the contemporary creative industries.',
      fullContent: `The integration of digital technologies into art education represents one of the most significant transformations in creative pedagogy since the Renaissance. As traditional boundaries between disciplines blur, art educators face the challenge of preparing students for a rapidly evolving creative landscape.

The digital revolution in art education encompasses multiple dimensions:

Technological Integration:
Modern art studios now include computer labs, 3D printers, and virtual reality equipment alongside traditional easels and kilns. Students must develop proficiency in both digital tools and traditional techniques, understanding how each medium can enhance and complement the other.

Expanded Career Opportunities:
Digital literacy opens doors to careers that didn't exist a generation ago: user experience design, digital marketing, gaming art, virtual reality development, and digital museum curation. Art education must evolve to address these emerging professional paths.

Changed Learning Methodologies:
Digital platforms enable new forms of collaborative learning, online critiques, virtual studio visits, and access to global art communities. Students can receive feedback from international artists and participate in virtual residencies.

Preservation and Documentation:
Digital technologies offer new methods for preserving artistic heritage and documenting creative processes. Students learn to create comprehensive portfolios that include not just finished works but also process documentation and interactive presentations.

Challenges in implementation:

Resource Requirements:
Acquiring and maintaining current technology requires significant investment. Institutions must balance funding between traditional art supplies and digital equipment while ensuring equitable access for all students.

Faculty Development:
Instructors must continuously update their skills to remain current with evolving technologies. This requires ongoing professional development and adaptation of teaching methods.

Maintaining Artistic Integrity:
The challenge lies in using technology as a tool for artistic expression rather than allowing it to dominate the creative process. Students must understand that technical proficiency serves artistic vision, not the reverse.

Best practices for digital integration:

Hybrid Approaches:
Successful programs combine traditional and digital methods, allowing students to understand how different approaches can enhance their artistic practice.

Project-Based Learning:
Real-world projects that require students to solve complex creative problems using multiple tools and methodologies.

Industry Partnerships:
Collaborations with creative industries provide students with current knowledge of professional practices and expectations.

Critical Thinking:
Emphasis on developing critical thinking skills that allow students to evaluate and select appropriate tools for their artistic goals.

The future of creative education lies not in choosing between traditional and digital approaches but in thoughtfully integrating both to create comprehensive learning experiences that prepare students for diverse creative careers while maintaining the fundamental values of artistic expression and cultural engagement.`,
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-28'),
      author: 'Dr. Hany Farouk',
      category: 'article',
      readMoreUrl: '/news-details/2',
      featured: true,
      relatedItems: [1, 3, 5]
    },
    {
      id: 3,
      title: 'The Role of Art in Cultural Diplomacy: Egypt\'s Soft Power Through Creative Expression',
      summary: 'Examining how Egyptian art serves as a bridge between cultures and contributes to the country\'s international cultural diplomacy efforts.',
      fullContent: `Cultural diplomacy through artistic expression has emerged as one of Egypt's most effective tools for international engagement, leveraging the country's rich cultural heritage and contemporary creative achievements to build bridges across cultures and strengthen international relationships.

Egypt's approach to cultural diplomacy through art operates on multiple levels:

Historical Legacy as Foundation:
Egypt's ancient artistic achievements provide an unparalleled foundation for cultural diplomacy. The international fascination with Egyptian civilization creates natural opportunities for cultural exchange and collaboration.

Contemporary Artistic Achievement:
Modern Egyptian artists have gained international recognition, serving as cultural ambassadors who represent not only their personal artistic vision but also broader Egyptian cultural values and perspectives.

Educational Exchange:
Art education partnerships with international institutions facilitate cultural understanding and create lasting relationships between Egyptian students and global artistic communities.

Museum and Exhibition Diplomacy:
International exhibitions of Egyptian art, both historical and contemporary, serve as platforms for cultural dialogue and mutual understanding.

Strategic advantages of art-based cultural diplomacy:

Universal Language:
Art transcends linguistic barriers, allowing for communication and connection across diverse cultural backgrounds.

Emotional Connection:
Artistic experiences create emotional responses that facilitate deeper cultural understanding than traditional diplomatic exchanges.

Soft Power Projection:
Art presents an attractive and non-threatening representation of Egyptian culture, building positive associations and goodwill.

Long-term Impact:
Cultural exchanges through art create lasting relationships that extend beyond specific political or economic circumstances.

Successful examples of Egyptian art diplomacy:

International Exhibitions:
Major exhibitions of Egyptian art in prestigious international venues have enhanced Egypt's cultural profile and attracted cultural tourism.

Artist Residency Programs:
Exchange programs that bring international artists to Egypt while sending Egyptian artists abroad create networks of cultural understanding.

Educational Partnerships:
Collaborations between Egyptian art institutions and international schools create ongoing cultural dialogue.

Digital Diplomacy:
Online exhibitions and virtual cultural exchanges expand Egypt's reach to global audiences.

Contemporary challenges and opportunities:

Technology Integration:
Digital platforms offer new opportunities for cultural diplomacy but require investment in technological infrastructure and skills.

Balancing Tradition and Innovation:
Successful cultural diplomacy must present both Egypt's historical achievements and contemporary creativity.

Resource Allocation:
Effective cultural diplomacy requires sustained investment in artistic education, exhibition facilities, and exchange programs.

Global Competition:
Many countries now recognize the value of cultural diplomacy, creating increased competition for international attention and partnerships.

The future of Egyptian art diplomacy lies in developing comprehensive strategies that leverage both historical achievements and contemporary innovations, creating sustainable programs that build long-term cultural relationships while advancing Egypt's international interests through the universal language of artistic expression.`,
      imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-25'),
      author: 'Prof. Aisha Mahmoud',
      category: 'article',
      readMoreUrl: '/news-details/3',
      featured: false,
      relatedItems: [1, 2, 4]
    },
    {
      id: 4,
      title: 'Sustainability in Art Practice: Environmental Consciousness in Contemporary Creation',
      summary: 'How artists are incorporating sustainable practices and environmental awareness into their creative processes and artistic messages.',
      fullContent: `The growing awareness of environmental challenges has prompted significant changes in artistic practice, with many contemporary artists embracing sustainability both as a creative methodology and as a subject for artistic exploration.

Environmental consciousness in art manifests in multiple ways:

Sustainable Materials and Processes:
Artists are increasingly choosing materials and methods that minimize environmental impact. This includes using recycled materials, non-toxic pigments, sustainable canvases, and energy-efficient studio practices.

Conceptual Environmental Themes:
Many artists create works that directly address environmental issues, using their platform to raise awareness about climate change, pollution, biodiversity loss, and sustainable living.

Community Engagement:
Environmental art often involves community participation, creating projects that bring people together around shared environmental concerns and promote collective action.

Documentation and Advocacy:
Artists serve as witnesses to environmental change, documenting disappearing landscapes, endangered species, and the effects of climate change.

Innovative approaches to sustainable art:

Upcycling and Repurposing:
Transforming waste materials into artistic works that highlight both creative potential and waste problems.

Natural Materials:
Using locally sourced, biodegradable materials that connect artworks to specific places and ecosystems.

Renewable Energy:
Powering studios and exhibitions with renewable energy sources, demonstrating commitment to sustainable practices.

Digital Alternatives:
Utilizing digital platforms to reduce the environmental impact of exhibitions and art distribution.

Educational dimensions:

Student Training:
Art schools are incorporating sustainability into curriculum, teaching students to consider environmental impact in their creative decisions.

Research Integration:
Academic research examines the intersection of art and environmental science, developing new approaches to both fields.

Public Engagement:
Educational programs use art to make environmental science more accessible and engaging for general audiences.

Policy Influence:
Artistic advocacy contributes to environmental policy discussions and public awareness campaigns.

Challenges in sustainable art practice:

Material Limitations:
Some sustainable materials may not provide the longevity or visual qualities desired for certain artistic projects.

Economic Considerations:
Sustainable materials and processes may be more expensive, creating barriers for artists and institutions with limited budgets.

Technical Knowledge:
Artists need education about sustainable alternatives and their proper use in artistic applications.

Market Acceptance:
The art market must adapt to value sustainability alongside traditional artistic criteria.

Regional perspectives on environmental art:

Desert Ecosystems:
Artists in Egypt and similar regions focus on water conservation, desert ecology, and the cultural significance of landscape.

Urban Environment:
City-based artists address pollution, urban planning, and the relationship between built and natural environments.

Cultural Integration:
Environmental art must respect and incorporate local cultural values and traditional ecological knowledge.

Global Connections:
Local environmental art contributes to global conversations about climate change and sustainability.

The future of sustainable art practice depends on continued innovation in materials and methods, increased education about environmental issues, and recognition that artistic creation can be both environmentally responsible and aesthetically powerful.`,
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-20'),
      author: 'Dr. Mona El-Kholi',
      category: 'article',
      readMoreUrl: '/news-details/4',
      featured: false,
      relatedItems: [1, 3, 5]
    },
    {
      id: 5,
      title: 'Art Therapy: Healing Through Creative Expression in Educational Settings',
      summary: 'The integration of therapeutic art practices in educational environments and their benefits for student mental health and learning.',
      fullContent: `The integration of art therapy principles into educational settings represents a growing recognition of the profound connection between creative expression and mental health, offering students alternative pathways for communication, stress relief, and personal development.

Art therapy in educational contexts differs from clinical applications while maintaining core therapeutic principles:

Educational Integration:
Rather than replacing traditional therapy, art activities in educational settings provide supplementary support that enhances learning while addressing student emotional needs.

Preventive Approach:
Educational art therapy focuses on prevention and early intervention, helping students develop coping skills before problems become severe.

Inclusive Practice:
All students can benefit from therapeutic art activities, not just those with identified mental health concerns.

Academic Enhancement:
Creative expression supports cognitive development, problem-solving skills, and academic achievement across subjects.

Therapeutic benefits in educational settings:

Stress Reduction:
Art-making provides a respite from academic pressures and offers healthy stress management techniques.

Emotional Expression:
Students who struggle with verbal communication can express feelings and experiences through visual means.

Self-Esteem Building:
Successful creative experiences build confidence and self-efficacy that transfers to other areas of learning.

Social Connection:
Group art activities foster communication, empathy, and collaborative skills.

Implementation strategies:

Teacher Training:
Educators learn to incorporate therapeutic art techniques into regular classroom activities and recognize when professional referrals are needed.

Safe Spaces:
Creating physical and emotional environments where students feel secure in exploring creative expression.

Material Accessibility:
Ensuring all students have access to appropriate art materials regardless of economic circumstances.

Process Focus:
Emphasizing the therapeutic value of the creative process rather than the quality of finished products.

Cultural considerations:

Culturally Responsive Practice:
Art therapy approaches must respect and incorporate students' cultural backgrounds and artistic traditions.

Family Engagement:
Involving families in understanding and supporting therapeutic art practices.

Community Integration:
Connecting school-based programs with community mental health resources and cultural organizations.

Traditional Knowledge:
Incorporating traditional healing and artistic practices that resonate with student cultural identities.

Specific applications in art education:

Portfolio Development:
Using artistic portfolios as tools for self-reflection and personal growth documentation.

Peer Support:
Training students to provide supportive feedback and emotional encouragement to classmates.

Crisis Response:
Utilizing art activities as immediate support during difficult periods or traumatic events.

Transition Support:
Helping students navigate academic and personal transitions through creative expression.

Evidence-based outcomes:

Academic Performance:
Research demonstrates improved academic performance among students participating in therapeutic art programs.

Behavioral Improvements:
Reduction in behavioral problems and increased classroom engagement.

Mental Health Indicators:
Decreased anxiety and depression symptoms among participating students.

Social Skills:
Enhanced communication and interpersonal relationship skills.

Professional development needs:

Training Programs:
Educators need specialized training in recognizing trauma, facilitating therapeutic art activities, and making appropriate referrals.

Ongoing Support:
Teachers implementing therapeutic art approaches require ongoing consultation and support from mental health professionals.

Resource Development:
Creation of culturally appropriate materials and guidelines for therapeutic art in educational settings.

Research Collaboration:
Partnerships between educators, mental health professionals, and researchers to evaluate and improve practices.

The future of therapeutic art in education depends on continued research, increased funding for mental health support in schools, and recognition that creative expression is not a luxury but an essential component of comprehensive education that addresses the whole student.`,
      imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-15'),
      author: 'Dr. Amina Hassan',
      category: 'article',
      readMoreUrl: '/news-details/5',
      featured: true,
      relatedItems: [2, 3, 4]
    }
  ];

  getAllArticles(): ArticleItem[] {
    return this.articles;
  }

  getArticleById(id: number): ArticleItem | undefined {
    return this.articles.find(article => article.id === id);
  }

  getFeaturedArticles(): ArticleItem[] {
    return this.articles.filter(article => article.featured);
  }

  getRelatedArticles(currentId: number, relatedIds: number[]): ArticleItem[] {
    return this.articles.filter(article => 
      relatedIds.includes(article.id) && article.id !== currentId
    );
  }
}