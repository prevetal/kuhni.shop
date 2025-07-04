<sectin class="contacts_info block" id="contacts_info">
    <div class="cont">
        <div class="hor_line"></div>

        <div class="block_head">
            <div class="title">Адрес</div>
        </div>

        <div class="row">
            <div class="data">
                <div class="location">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_location"></use></svg>

                    <div><?php the_field("adres", "option"); ?></div>
                </div>

                <div class="metro">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_metro"></use></svg>

                    <div><?php the_field("metro", "option"); ?></div>
                </div>

                <div class="work_time">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_calendar2"></use></svg>

                    <div><?php the_field("time", "option"); ?></div>
                </div>

                <div class="phone">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_phone"></use></svg>

                    <div>
                        <div><a href="tel:<?php the_field("phone", "option"); ?>"><?php the_field("phone", "option"); ?></a></div>

                        <div class="exp">по России бесплатно</div>
                    </div>
                </div>

                <div class="phone">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_phone"></use></svg>

                    <div>
                        <div><a href="tel:<?php the_field("phone2", "option"); ?>"><?php the_field("phone2", "option"); ?></a></div>

                        <div class="exp">бесплатно с мобильных</div>
                    </div>
                </div>

                <div>
                    <button class="order_btn modal_btn" data-modal="order_modal">Заказать кухню</button>
                </div>
            </div>

            <div class="virtual_tour">
                <picture class="image">
                    <img src="<?php bloginfo('template_url'); ?>/images/tmp/virtual_tour_thumb.jpg" alt="" loading="lazy">
                </picture>

                <a href="<?php the_field("virtual", "option"); ?>" target="_blank" rel="noopener nofollow" class="btn">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_virtual_tour"></use></svg>
                    <span>Виртуальный тур</span>
                </a>
            </div>

            <div class="map">
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aaf44313b0932b80480fcb38b22cf5add3a265ed3ca9fe23fdb522688fb04f3e8&amp;width=100%25&amp;height=306&amp;lang=ru_RU&amp;scroll=true"></script>
                <a href="<?php the_field("marshrut", "option"); ?>" target="_blank" rel="noopener nofollow" class="btn">
                    <svg class="icon"><use xlink:href="<?php bloginfo('template_url'); ?>/images/sprite.svg#ic_path"></use></svg>
                    <span>Простроить маршрут</span>
                </a>
            </div>
        </div>
    </div>
</sectin>