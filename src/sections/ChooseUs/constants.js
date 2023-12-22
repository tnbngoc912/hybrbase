export const SETTING_SLIDER = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const DUMMY_DATA = [
  {
    title: "Craftmanship 1",
    content:
      "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."
  },
  {
    title: "Craftmanship 2",
    content:
      "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."
  },
  {
    title: "Craftmanship 3",
    content:
      "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."
  },
  {
    title: "Craftmanship 4",
    content:
      "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."
  },
  {
    title: "Craftmanship 5",
    content:
      "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."
  }
];
