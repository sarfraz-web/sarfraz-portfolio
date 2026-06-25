/** @format */

const ArticleSingleShow = ({ articles }) => {
  return (
    <>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="flex justify-between items-center group">
            {article.href ? (
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className=" dark:text-articleLinkColor text-blue-800 font-semibold dark:font-normal hover:text-orange-500 dark:hover:text-orange-400 transition-colors sm:text-lg text-sm"
              >
                {article.title}
              </a>
            ) : (
              <span className="dark:text-zinc-200 text-zinc-800 font-semibold dark:font-normal sm:text-lg text-sm">
                {article.title}
              </span>
            )}
            <span className="text-zinc-500 text-sm sm:block hidden">
              {article.date}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticleSingleShow;
