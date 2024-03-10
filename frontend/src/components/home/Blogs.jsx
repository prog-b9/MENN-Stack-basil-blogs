"use client";
import React, { useEffect } from "react";
import BlogCard from "../blogs/BlogCard";
import CustomInput from "../utility/CustomInput";
import { IoSearch } from "react-icons/io5";

export const blogPosts = [
  {
    title: "React",
    description: "تطبيقات الصفحة الواحدة (SPA) تجلب لك تجربة تصفح فريدة.",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "تطوير الويب" },
      { tag: "ابتكار" },
      { tag: "واجهة المستخدم" },
    ],
  },
  {
    title: "HTML",
    description: "لغة ترميز النص الفائق تلعب دورًا حاسمًا في بناء صفحات الويب.",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "تطوير الويب" },
      { tag: "SSR-CSR" },
      { tag: "ابتكار" },
      { tag: "تقنية المستقبل" },
      { tag: "تطوير" },
    ],
  },
  {
    title: "التقنية والحياة اليومية",
    description:
      "كيف تؤثر التكنولوجيا في حياتنا اليومية وكيف نستفيد منها بشكل أفضل؟",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "حياة اليومية" },
      { tag: "ابتكارات حديثة" },
      { tag: "تطوير الواجهة الأمامية" },
      { tag: "ذكاء اصطناعي" },
      { tag: "ابتكار" },
    ],
  },
  {
    title: "لغات برمجة المستقبل",
    description:
      "استعراض لبعض لغات البرمجة القادمة التي قد تحدد مستقبل التطوير البرمجي.",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "برمجة" },
      { tag: "لغات برمجة" },
      { tag: "ابتكار" },
      { tag: "تقنية المستقبل" },
      { tag: "تطوير" },
    ],
  },
  {
    title: "أمان البيانات في العصر الرقمي",
    description:
      "كيف يمكننا حماية بياناتنا في عصر تكنولوجيا المعلومات والاتصالات؟",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "أمان المعلومات" },
      { tag: "ابتكار" },
      { tag: "تقنية المستقبل" },
      { tag: "تطوير" },
      { tag: "حماية البيانات" },
    ],
  },
  {
    title: "التحول الرقمي في عالم الأعمال",
    description: "كيف يؤثر التحول الرقمي في استراتيجيات الأعمال والابتكار؟",
    tags: [
      { tag: "تكنولوجيا" },
      { tag: "تحول رقمي" },
      { tag: "ابتكار" },
      { tag: "تطوير الأعمال" },
      { tag: "تقنية المستقبل" },
      { tag: "تحليل تقني" },
    ],
  },
];
const Blogs = ({ blogs }) => {
  useEffect(() => {
    const fetD = async () => {
      const getBlogs = await fetch(`${baseUrl}/blogs`);
      const res = await getBlogs.json();
      console.log(res);
      return res;
    };
    fetD();
  }, []);
  console.log(blogs);
  return (
    <section className="container mt-10">
      <div className="">
        <CustomInput
          label={"البحث"}
          placeholder={"البحث"}
          icon={<IoSearch />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-5">
        {blogPosts.map((item, i) => (
          <BlogCard key={i} props={item} id={i} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
